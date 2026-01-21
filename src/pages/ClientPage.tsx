
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, User, Settings, Store, ExternalLink } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '@/context/StoreContext'

function ClientPage() {
    const navigate = useNavigate()
    const context = useContext(StoreContext)

    if (!context) throw new Error("StoreContext not found")

    const { stores } = context

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="border-b bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="font-semibold text-lg">KhojIQ Client</div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                            <Settings className="w-4 h-4" />
                            Account Settings
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full bg-secondary">
                                    <User className="w-5 h-5 text-foreground" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">

                {stores.length === 0 ? (
                    /* Empty State */
                    <div className="h-[60vh] flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl bg-card/50">
                        <div className="text-center space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-medium tracking-tight">No stores configured</h2>
                                <p className="text-muted-foreground max-w-sm mx-auto">
                                    You haven't added any stores yet. Add your first store to start indexing inventory.
                                </p>
                            </div>

                            <Button size="lg" className="gap-2 shadow-lg" onClick={() => navigate('/add-store')}>
                                <Plus className="w-5 h-5" />
                                Add a Store
                            </Button>
                        </div>
                    </div>
                ) : (
                    /* Store Grid */
                    <div className="space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">My Stores</h2>
                            <Button className="gap-2" onClick={() => navigate('/add-store')}>
                                <Plus className="w-4 h-4" />
                                Add New Store
                            </Button>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {stores.map(store => (
                                <Card
                                    key={store.id}
                                    className="group hover:shadow-md transition-all cursor-pointer hover:border-primary/50"
                                    onClick={() => navigate(`/store/${store.id}`)}
                                >
                                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Store className="w-5 h-5 text-primary" />
                                        </div>
                                        {store.url && (
                                            <a href={store.url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </CardHeader>
                                    <CardContent className="space-y-4 pt-4">
                                        <div>
                                            <CardTitle className="text-xl mb-1">{store.name}</CardTitle>
                                            <CardDescription className="line-clamp-1">{store.url || 'No website linked'}</CardDescription>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Metrics</div>
                                            <div className="flex flex-wrap gap-2">
                                                {store.metrics.slice(0, 3).map(metric => (
                                                    <Badge key={metric} variant="secondary" className="font-normal">
                                                        {metric}
                                                    </Badge>
                                                ))}
                                                {store.metrics.length > 3 && (
                                                    <Badge variant="outline" className="font-normal text-muted-foreground">
                                                        +{store.metrics.length - 3} more
                                                    </Badge>
                                                )}
                                                {store.metrics.length === 0 && (
                                                    <span className="text-xs text-muted-foreground italic">No metrics defined</span>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

            </main>
        </div>
    )
}

export default ClientPage


import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { StoreContext, type Store } from '@/context/StoreContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Plus, X, Upload, Save, Settings } from 'lucide-react'

function StoreDashboardPage() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const context = useContext(StoreContext)

    if (!context) throw new Error("StoreContext not found")

    const { stores, updateStore } = context
    const [store, setStore] = useState<Store | null>(null)

    // Local state for editing metrics
    const [metrics, setMetrics] = useState<string[]>([])
    const [newMetric, setNewMetric] = useState('')
    const [hasChanges, setHasChanges] = useState(false)

    useEffect(() => {
        const foundStore = stores.find(s => s.id === id)
        if (foundStore) {
            setStore(foundStore)
            setMetrics(foundStore.metrics)
        } else {
            // Redirect if store not found found
            navigate('/client')
        }
    }, [id, stores, navigate])

    const handleAddMetric = (e: React.FormEvent) => {
        e.preventDefault()
        if (newMetric.trim() && !metrics.includes(newMetric.trim())) {
            setMetrics([...metrics, newMetric.trim()])
            setNewMetric('')
            setHasChanges(true)
        }
    }

    const removeMetric = (metricToRemove: string) => {
        setMetrics(metrics.filter(m => m !== metricToRemove))
        setHasChanges(true)
    }

    const handleSaveChanges = () => {
        if (store) {
            updateStore(store.id, { metrics })
            setHasChanges(false)
        }
    }

    if (!store) return null

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="border-b bg-card sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigate('/client')} className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                        <div className="h-6 w-px bg-border" />
                        <h1 className="font-semibold text-lg">{store.name}</h1>
                        <Badge variant="outline" className="font-normal text-muted-foreground">Dashboard</Badge>
                    </div>

                    {hasChanges && (
                        <Button size="sm" onClick={handleSaveChanges} className="gap-2 animate-in fade-in zoom-in duration-200">
                            <Save className="w-4 h-4" />
                            Save Changes
                        </Button>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <Tabs defaultValue="inventory" className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="inventory" className="gap-2">
                            <Upload className="w-4 h-4" />
                            Inventory
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="gap-2">
                            <Settings className="w-4 h-4" />
                            Store Settings
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="inventory" className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">Inventory</h2>
                                <p className="text-muted-foreground">Manage your products and photos.</p>
                            </div>
                            <Button>
                                <Plus className="w-4 h-4 mr-2" />
                                Add Product
                            </Button>
                        </div>

                        {/* Upload Placeholder */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="border-2 border-dashed border-border rounded-xl p-12 flex flex-col items-center justify-center text-center space-y-4 hover:bg-secondary/20 transition-colors cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                                        <Upload className="w-6 h-6 text-muted-foreground" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-medium">Upload new items</p>
                                        <p className="text-sm text-muted-foreground">JPG, PNG up to 10MB each</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Empty List Placeholder */}
                        <div className="text-center py-12 text-muted-foreground">
                            <p>No products indexed yet.</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="settings" className="max-w-2xl">
                        <Card>
                            <CardHeader>
                                <CardTitle>Metric Configuration</CardTitle>
                                <CardDescription>
                                    Update the keywords used to analyze your products.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <form onSubmit={handleAddMetric} className="flex gap-2">
                                    <Input
                                        value={newMetric}
                                        onChange={(e) => setNewMetric(e.target.value)}
                                        placeholder="Add a new metric..."
                                    />
                                    <Button type="submit" variant="secondary">Add</Button>
                                </form>

                                <div className="flex flex-wrap gap-2">
                                    {metrics.map(metric => (
                                        <Badge key={metric} variant="secondary" className="px-3 py-1.5 text-base font-normal flex items-center gap-2">
                                            {metric}
                                            <button onClick={() => removeMetric(metric)} className="hover:text-destructive">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}

export default StoreDashboardPage

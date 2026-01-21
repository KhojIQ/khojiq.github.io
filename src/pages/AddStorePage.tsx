import { useState, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, X, Plus, Store } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '@/context/StoreContext'

function AddStorePage() {
    const navigate = useNavigate()
    const context = useContext(StoreContext)

    if (!context) throw new Error("StoreContext not found")

    const { addStore } = context

    const [metrics, setMetrics] = useState<string[]>(['Occasion', 'Vibe', 'Season'])
    const [newMetric, setNewMetric] = useState('')
    const [storeName, setStoreName] = useState('')
    const [storeUrl, setStoreUrl] = useState('')

    const handleAddMetric = (e: React.FormEvent) => {
        e.preventDefault()
        if (newMetric.trim() && !metrics.includes(newMetric.trim())) {
            setMetrics([...metrics, newMetric.trim()])
            setNewMetric('')
        }
    }

    const removeMetric = (metricToRemove: string) => {
        setMetrics(metrics.filter(m => m !== metricToRemove))
    }

    const handleCreateStore = () => {
        if (!storeName.trim()) return

        addStore({
            name: storeName,
            url: storeUrl,
            metrics: metrics
        })
        navigate('/client')
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="border-b bg-card sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
                    <Button variant="ghost" size="sm" onClick={() => navigate('/client')} className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Button>
                    <div className="h-6 w-px bg-border" />
                    <h1 className="font-semibold text-lg">Add New Store</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="grid gap-8">

                    {/* Store Details */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Store className="w-4 h-4 text-primary" />
                            </div>
                            <h2 className="text-xl font-semibold">Store Details</h2>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Basic Information</CardTitle>
                                <CardDescription>
                                    Tell us about your boutique.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="storeName">Store Name</Label>
                                    <Input
                                        id="storeName"
                                        placeholder="e.g. The Modern Loft"
                                        value={storeName}
                                        onChange={(e) => setStoreName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="storeUrl">Website URL (Optional)</Label>
                                    <Input
                                        id="storeUrl"
                                        placeholder="https://..."
                                        value={storeUrl}
                                        onChange={(e) => setStoreUrl(e.target.value)}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Keyword Metrics */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Plus className="w-4 h-4 text-primary" />
                            </div>
                            <h2 className="text-xl font-semibold">Keyword Metrics</h2>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Define your metrics</CardTitle>
                                <CardDescription>
                                    These keywords define how you sell. We'll use them to analyze your products.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <form onSubmit={handleAddMetric} className="flex gap-2">
                                    <Input
                                        value={newMetric}
                                        onChange={(e) => setNewMetric(e.target.value)}
                                        placeholder="Add a metric (e.g. 'Fabric', 'Fit', 'Designer')"
                                        className="max-w-md"
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
                                    {metrics.length === 0 && (
                                        <p className="text-sm text-muted-foreground italic">No metrics added yet.</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <div className="flex justify-end pt-4 pb-12">
                        <Button size="lg" className="w-full sm:w-auto" onClick={handleCreateStore} disabled={!storeName.trim()}>
                            Create Store
                        </Button>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default AddStorePage

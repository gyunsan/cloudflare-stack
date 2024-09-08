'use client'

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ingredientCategories = [
    { name: 'Fruits', icon: '🍎' },
    { name: 'Vegetables', icon: '🥕' },
    { name: 'Meats', icon: '🍗' },
    { name: 'Dairy', icon: '🧀' },
    { name: 'Grains', icon: '🌾' },
    { name: 'Spices', icon: '🌶️' },
]

export default function IngredientsPage() {
    return (
        <div>
            <div className="mb-6">
                <Input type="text" placeholder="Search categories..." className="max-w-sm" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ingredientCategories.map((category, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="flex gap-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-2xl">
                                {category.icon}
                            </div>
                            <p className="text-lg font-semibold">{category.name}</p>
                        </CardHeader>
                        <CardBody>
                            <p className="text-sm text-gray-500">
                                Explore various {category.name.toLowerCase()} in this category.
                            </p>
                        </CardBody>
                        <CardFooter>
                            <Button variant="outline" className="w-full">
                                View Ingredients
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
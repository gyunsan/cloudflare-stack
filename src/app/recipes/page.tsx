"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        prepTime: "20 mins",
        cookTime: "15 mins",
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        description: "A flavorful Indian curry dish with tender chicken in a creamy tomato sauce.",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        prepTime: "30 mins",
        cookTime: "40 mins",
    },
    {
        id: 3,
        title: "Vegetable Stir Fry",
        description: "A quick and healthy mix of fresh vegetables cooked in a savory sauce.",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        prepTime: "15 mins",
        cookTime: "10 mins",
    },
    {
        id: 4,
        title: "Beef Tacos",
        description: "Delicious Mexican-style tacos with seasoned ground beef and fresh toppings.",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        prepTime: "20 mins",
        cookTime: "15 mins",
    },
    // write more recipes here
    {
        id: 5,
        title: "Vegetable Stir Fry",
        description: "A quick and healthy mix of fresh vegetables cooked in a savory sauce.",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        prepTime: "15 mins",
        cookTime: "10 mins",
    },

    {
        id: 6,
        title: "Vegetable Stir Fry",
        description: "A quick and healthy mix of fresh vegetables cooked in a savory sauce.",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        prepTime: "15 mins",
        cookTime: "10 mins",
    },
    {
        id: 7,
        title: "Vegetable Stir Fry",
        description: "A quick and healthy mix of fresh vegetables cooked in a savory sauce.",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81",
        prepTime: "15 mins",
        cookTime: "10 mins",
    },

]

export default function RecipesPage() {
    const [isBlurred, setIsBlurred] = useState(false)

    useEffect(() => {
        setIsBlurred(true)
    }, [])

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
            {recipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        width={300}
                        height={200}
                        className="w-full object-cover h-48"
                    />
                    <CardHeader>
                        <CardTitle>{recipe.title}</CardTitle>
                        <CardDescription>{recipe.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Prep: {recipe.prepTime} | Cook: {recipe.cookTime}
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs({ pathSegments }: { pathSegments: string[] }) {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem >
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    {pathSegments.map((segment, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className="capitalize my-3">
                                {index === pathSegments.length - 1 ? (
                                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                                        {segment}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
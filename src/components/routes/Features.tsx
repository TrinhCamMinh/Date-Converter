import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { featureData } from "@/data";
import { Feature } from "@/types";

const Features = ({className} : {className?: string}) => {
    return (
        <div className={`${className} grid grid-cols-1 sm:grid-cols-3 gap-4`}>
            {
                featureData.map((item:Feature) => {
                    return (
                        <Card className="text-center text-balance" key={item.title}>
                            <CardHeader>
                                <CardTitle>{item.icon}</CardTitle>
                                <CardDescription>{item.title}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{item.description}</p>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Features;
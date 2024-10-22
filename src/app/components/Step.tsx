export default function Step({ icon, color, title, description }: { icon: React.ReactNode, color: string, title: string, description: string }) {
    return (
        <div className="flex items-start justify-center space-x-4">
            <div className={`${color} p-2 rounded-lg`}>
                {icon}
            </div>
            <div className="flex items-start justify-center flex-col">
                <h3 className="font-semibold text-[1rem] ">{title}</h3>
                <p className="text-gray-600 ">{description}</p>
            </div>
        </div>
    )
}
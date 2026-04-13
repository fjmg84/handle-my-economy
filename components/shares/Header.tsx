interface HeadersProps {
    title: string;
    description?: string;
}

function Headers({ title, description }: HeadersProps) {
    return (
        <div id="headers">
        <h2 className="text-xl font-bold text-gray-900">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-gray-600 mt-1">
            {description}
          </p>
        )}
      </div>
    )
}

export default Headers;
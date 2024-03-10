
function Input({ LabelName, ...props }) {
    console.log()
    return (
        <>
            <div className="mb-10">{LabelName}</div>
            <input {...props} />
        </>
    )
}

export default Input
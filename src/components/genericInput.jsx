
function GenericInput({ title, name, value = null, onChange = null }) {

    return (
        <>

            <label className="text-xl flex flex-col">
                <div className="font-semibold">{title}</div>
                <input name={name} value={value} onChange={onChange}
                    className=" text-base bg-slate-100 rounded-lg mt-4 p-2 "
                />
            </label>
        </>
    )
}

export default GenericInput;


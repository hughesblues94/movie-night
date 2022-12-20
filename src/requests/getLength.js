const getLength = (length) => {
    if (length === "Short") {
        return "with_runtime.lte=80"
    } else if (length === "Medium") {
        return "with_runtime.gte=80&with_runtime.lte=120"
    } else if (length === "Long") {
        return "with_runtime.gte=220"
    }
}
 
export default getLength;
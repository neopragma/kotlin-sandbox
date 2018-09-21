// Bwa-ha-haaa, I am ee-vile client code that passes null references to the greet function.
fun main(args: Array<String>) {
    val name: String? = null
    Greeter(name).greet()
}

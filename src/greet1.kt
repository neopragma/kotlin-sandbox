fun main(args: Array<String>) {
    val name: String = if (args.size > 0) args[0] else "You fine young cannibal"
    Greeter(name).greet()
}
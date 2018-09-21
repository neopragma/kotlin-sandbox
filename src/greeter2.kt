class Greeter2(val name: String) {
    fun greet() {
        println(formatMessage());
    }
    fun formatMessage():String {
        return "Hello, ${name}!"
    }
}

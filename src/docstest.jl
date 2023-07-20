export hello 

"""
    hello(who::String)

Return "Hello, `who`".

```jldoctest
julia> hello("Stranger")
"Hello, Stranger"
```
"""
hello(who::String) = "Hello, $who"

# Code evaluation `@example`

```@example
A = rand(ComplexF64, 10, 15)
real.(A)
```

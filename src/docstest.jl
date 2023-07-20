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

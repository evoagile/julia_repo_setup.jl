export sine, cosine, binom, plus

"""
    plus(x, y)
Calculate add `x` and `y`.
"""
function plus(x::Number, y::Number)
  return x + y
end

"""
    sine(x)
Calculate the sine of an angle `x` given in radians.
"""
function sine(x::Number)
  n = 9
  total = 0
  for i in 0:n
    total += (-1)^i * x^(2i + 1) / factorial(2i + 1)
  end
  return total
end

"""
    cosine(x)
Calculate the cosine of an angle `x` given in radians.
"""
function cosine(x::Number)
  n = 9
  total = return mapreduce(+, 0:n) do i
    (-1)^i * x^(2i) / factorial(2i)
  end
  total
end

"""
Here's some inline maths: ``\\sqrt[n]{1 + x + x^2 + \\ldots}``.

Here's an equation:

``\\frac{n!}{k!(n - k)!} = \\binom{n}{k}``

This is the binomial coefficient.
"""
function binom(x::Number)
  bino = 0
  return bino
end

"""
    bar(x[, y])

Compute the Bar index between `x` and `y`.

If `y` is unspecified, compute the Bar index between all pairs of columns of `x`.

# Examples
```julia-repl
julia> bar([1, 2], [1, 2])
1
```

"""
function bar(x::Number)
  return bar = 0
end

@doc raw"""
Here's some inline maths: ``\sqrt[n]{1 + x + x^2 + \ldots}``.

Here's an equation:

``\frac{n!}{k!(n - k)!} = \binom{n}{k}``

This is the binomial coefficient.
"""
f(x) = x

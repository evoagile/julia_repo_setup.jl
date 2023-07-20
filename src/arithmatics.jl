export plus, sine, cosine 

"""
    plus(x, y)
Calculate add `x` and `y`.
"""
function plus(x::Number, y::Number)
  x + y
end

"""
    sine(x)
Calculate the sine of an angle `x` given in radians.
"""
function sine(x::Number)
  n = 9
  total = 0
  for i = 0:n
    total += (-1)^i * x^(2i + 1) / factorial(2i + 1)
  end
  total
end

"""
    cosine(x)
Calculate the cosine of an angle `x` given in radians.
"""
function cosine(x::Number)
  n = 9
  total = 0
  mapreduce(+, 0:n) do i
    (-1)^i * x^(2i) / factorial(2i)
  end
end


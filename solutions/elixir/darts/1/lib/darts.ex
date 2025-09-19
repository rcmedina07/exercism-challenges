defmodule Darts do
  @type position :: {number, number}

  @doc """
  Calculate the score of a single dart hitting a target.
  """
  @spec score(position) :: integer
  def score({x, y}) do
    r_inner = 1
    r_middle = 5
    r_outer = 10

    d = :math.sqrt(:math.pow(x, 2) + :math.pow(y, 2))

    cond do
      d <= r_inner -> 10
      d <= r_middle -> 5
      d <= r_outer -> 1
      true -> 0
    end
  end
end

defmodule HighSchoolSweetheart do
  def first_letter(name) do
    name
      |> String.trim()
      |> String.at(0)
  end

  def initial(name) do
    first_letter(name)
      |> String.upcase()
      |> Kernel.<>(".")
  end

  def initials(full_name) do
    [name, last_name] = String.split(full_name, " ")
    name_initial = initial(name)
    last_name_initial = initial(last_name)
    "#{name_initial} #{last_name_initial}"
  end

  def pair(full_name1, full_name2) do
    """
    ❤-------------------❤
    |  #{initials(full_name1)}  +  #{initials(full_name2)}  |
    ❤-------------------❤
    """
  end
end

defmodule KitchenCalculator do
  def get_volume(volume_pair) do
    {_, volume} = volume_pair
    volume
  end

  def to_milliliter(volume_pair) do
    {unit, volume} = volume_pair
    case unit do
      :cup -> {:milliliter, volume * 240}
      :fluid_ounce -> {:milliliter, volume * 30}
      :teaspoon -> {:milliliter, volume * 5}
      :tablespoon -> {:milliliter, volume * 15}
      :milliliter -> {:milliliter, volume}
    end
  end

  def from_milliliter(volume_pair, unit) do
   {_, volume} = volume_pair
    case unit do
      :cup -> {unit, volume / 240}
      :fluid_ounce -> {unit, volume / 30}
      :teaspoon -> {unit, volume / 5}
      :tablespoon -> {unit, volume / 15}
      :milliliter -> {unit, volume}
    end
  end

  def convert(volume_pair, unit) do
    volume_pair_milliliter = to_milliliter(volume_pair)
    from_milliliter(volume_pair_milliliter, unit)
  end
end

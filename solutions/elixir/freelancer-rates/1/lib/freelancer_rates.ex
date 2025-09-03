defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    8.0 * hourly_rate;
  end

  def apply_discount(before_discount, discount) do
    (before_discount * (100 - discount)) / 100;
  end

  def monthly_rate(hourly_rate, discount) do
    before_discount = daily_rate(hourly_rate) * 22
    trunc(Float.ceil(apply_discount(before_discount, discount)))
  end

  def days_in_budget(budget, hourly_rate, discount) do
    rate = apply_discount(daily_rate(hourly_rate), discount);
    dates = budget / rate;
    Float.floor(dates, 1);
  end
end

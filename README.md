# Berrybush
A bush with berries on it. It can sometimes get too tall though. Run it a few times if you only see a stem.

The berries are red circles and the stems and leaves are green lines. If you have enough patience, it will grow to the top of the canvas.

The algorithm : The variable called *rand* is a radom value between 0 and 1. If *rand* is less than *berryChance*, then a berry will appear. If *rand* is between *berryChance* and *berryChance* + *tripleSplitChance*, the stem will split into three. If *rand* is between *berryChance* + *tripleSplitChance* and *berryChance* + *tripleSplitChance* + *splitChance*, the stem will split into two. If *rand* is is between *berryChance* + *tripleSplitChance* + *splitChance* and *berryChance* + *tripleSplitChance* + *splitChance* + *straightChance*, the stem will grow upwards. If *rand* is between *berryChance* + *tripleSplitChance* + *splitChance* + *straightChance* and *berryChance* + *tripleSplitChance* + *splitChance* + *straightChance* + *deleteChance*, then the stem will stop growing.

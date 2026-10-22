---
title: Weather
description: The coordinates, place name and units the Weather Surface and the sun's schedule use.
sidebar:
  order: 8
---

`[weather]` is where the weather is for. Unset, nothing is fetched.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `weather.location` | `[latitude, longitude]` | unset | Degrees, north and east positive; unset fetches nothing |
| `weather.place` | string | unset | The location's name, which the Weather Surface shows |
| `weather.units` | `metric` \| `imperial` | `metric` | °C and km/h, or °F and mph |

```toml
[weather]
location = [52.52, 13.41]
place = "Berlin"
units = "metric"
```

Kanade asks [Open-Meteo](https://open-meteo.com/) for it, sending only these coordinates, at start, every 30 minutes, on `kanade weather refresh`, when this key changes, and when the Weather Surface opens on a forecast 30 minutes old. A failed fetch tries again after a minute, doubling up to 30.

The same coordinates place the sun for `night-light.mode = "schedule"` when `night-light.sunset` and `night-light.sunrise` are not both set; the `weather` Module need not be on for that.

:::note
Weather data by Open-Meteo.com, under CC BY 4.0. With no location, nothing is fetched and the Weather Surface has nothing to show.
:::

## See also

[The Weather Surface](/surfaces/weather/), [night light](/configuration/integrations/), and [Config defaults](/reference/config-defaults/).

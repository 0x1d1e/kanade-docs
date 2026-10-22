---
title: Weather
description: Current conditions and the next days from Open-Meteo, at the coordinates you set.
sidebar:
  order: 7
---

The Weather Surface shows the weather now and the next days. It fetches nothing until `weather.location` is set.

```toml
[weather]
location = [52.52, 13.41]
place = "Berlin"
units = "metric"
```

| Key | Meaning |
| --- | --- |
| `location` | `[latitude, longitude]` in degrees, north and east positive; unset fetches nothing |
| `place` | The location's name, which this Surface shows |
| `units` | `metric` for °C and km/h, `imperial` for °F and mph |

Kanade asks [Open-Meteo](https://open-meteo.com/) for it, sending only these coordinates: at start, every 30 minutes, on `kanade weather refresh`, when the key changes, and when the Surface opens on a forecast 30 minutes old. A failed fetch tries again after a minute, doubling up to 30.

```sh
kanade weather refresh
kanade weather status
```

The time's Peek shows the weather beside the date when `rest.peek.weather` is on. Weather data by Open-Meteo.com, under CC BY 4.0.

## See also

[Weather configuration](/configuration/weather/), [The Island](/concepts/island/), and [night light](/configuration/integrations/), which can follow the sun at these coordinates.

---
sidebar_position: 300
---

# Input

```lua
local input = game:get('Input')
```

Input service provides signals to listen to various input events.

## Signals

### `onKeyPress:connect(handler: (event: KeyboardEvent): void): void` {#signal-onKeyPress}

Triggered when keyboard key is pressed.

```lua
local input = game:get('Input')
input.onKeyPress:connect(function(e)
  local key = e.key
  local mods = e.mods
end)
```

**Parameters:**

- `event`: Keyboard event
  - `event.key`: Value of the pressed key. The value is a numeric and is based on [GLFW key values](https://www.glfw.org/docs/latest/group__keys.html).
  - `event.mods`: Value of the modifier key (e.g Shift) pressed with the key. The value is a numeric and is based on [GLFW modifier flags](https://www.glfw.org/docs/latest/group__mods.html).

### `onKeyRelease:connect(handler: (event: KeyboardEvent): void): void` {#signal-onKeyRelease}

Triggered when keyboard key is released.

```lua
local input = game:get('Input')
input.onKeyPress:connect(function(e)
  local key = e.key
  local mods = e.mods
end)
```

**Parameters:**

- `event`: Keyboard event
  - `event.key`: Value of the released key. The value is a numeric and is based on [GLFW key values](https://www.glfw.org/docs/latest/group__keys.html).
  - `event.mods`: Value of the modifier key (e.g Shift) released with the key. The value is a numeric and is based on [GLFW modifier flags](https://www.glfw.org/docs/latest/group__mods.html).

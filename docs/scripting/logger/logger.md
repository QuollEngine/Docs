---
sidebar_position: 10
---

# Logger

Logger provides a way to log meaningful messages about the script. In editor, all logged messages are stored in the `Logs` tab:

![Logger](./img/logger.png)

## Reference

### `debug(message: string): void` {#debug}

Logs debug message

```lua
logger.debug("This is a debug message")
```

**Parameters:**

- `message`: Log message as string.

### `info(message: string): void` {#info}

Logs info message

```lua
logger.info("This is an info message")
```

**Parameters:**

- `message`: Log message as string.

### `warning(message: string): void` {#warning}

Logs warning message

```lua
logger.warning("This is a warning message")
```

**Parameters:**

- `message`: Log message as string.

### `error(message: string): void` {#error}

Logs error message

```lua
logger.debug("This is an error message")
```

**Parameters:**

- `message`: Log message as string.

### `fatal(message: string): void` {#fatal}

Logs fatal message

```lua
logger.debug("This is a fatal message")
```

**Parameters:**

- `message`: Log message as string.
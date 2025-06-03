# TagInput Component

A reusable and customizable **TagInput** component built with **React + TypeScript** (no UI libraries).

## Features

- ✅ Add tags by pressing **Enter**, **comma** (`,`), or **onBlur**.
- ✅ Configurable **separator** character.
- ✅ Remove tags by clicking the **X**.
- ✅ Set **maximum number of tags**.
- ✅ Prevent **duplicate tags**. 
- ✅ Fully styled with **Tailwind CSS**.
- ✅ Optionally collapse overflowing tags into a modal.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/tag-input-component.git
cd tag-input-component
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

---

## Usage

### 1. Import and use the `TagInput` component:

```tsx
import TagInput from './TagInput';
```

### 2. Example:

```tsx
const [tags, setTags] = useState<string[]>([]);

<TagInput
  value={tags}
  onChange={setTags}
  separator="," // optional, defaults to comma
  maxTags={5} // optional
  placeholder="Type tags"
  maxVisibleTags={3} // optional: collapse into modal
/>
```

---

## Props

| Prop             | Type                          | Default     | Description                                        |
|------------------|-------------------------------|-------------|----------------------------------------------------|
| `value`          | `string[]`                    | —           | Array of tags (controlled component)               |
| `onChange`       | `(tags: string[]) => void`    | —           | Callback when tags change                          |
| `separator`      | `string`                      | `","`       | Character used to separate tags                    |
| `maxTags`        | `number`                      | `undefined` | Max number of allowed tags (optional)              |
| `placeholder`    | `string`                      | `Enter tags`| Input placeholder                                  |
| `maxVisibleTags` | `number`                      | `undefined` | Maximum tags to display before collapsing to modal |

---

## Bonus Features
- ✅ Custom separator character (like `;`, `/`, etc).
- ✅ Optional modal to view all tags when exceeding `maxVisibleTags`.
- ✅ Unit tests with **Jest** + **React Testing Library**.

---

## Run the Example

```bash
npm start
```

Visit `http://localhost:3000` to view the demo.

---

## Run Tests

```bash
npm run test:watch
```

---

## License

MIT

import React, {
  useState,
  KeyboardEvent,
  FocusEvent,
  ChangeEvent,
} from 'react';

type TagInputProps = {
  value: string[];
  onChange: (tags: string[]) => void;
  separator?: string;
  maxTags?: number;
  placeholder?: string;
  className?: string;
  maxVisibleTags?: number;
};

const TagInput: React.FC<TagInputProps> = ({
  value,
  onChange,
  separator = ',',
  maxTags,
  placeholder = 'Enter tags',
  className = '',
  maxVisibleTags = 5,
}) => {
  const [input, setInput] = useState('');
  const [showAllTags, setShowAllTags] = useState(false);

  const addTags = (rawValue: string) => {
    const tags = rawValue
      .split(separator)
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0 && !value.includes(tag));

    const newTags = maxTags ? [...value, ...tags].slice(0, maxTags) : [...value, ...tags];

    if (newTags.length !== value.length) {
      onChange(newTags);
    }
    setInput('');
  };

  const removeTag = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === separator) {
      e.preventDefault();
      addTags(input);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (input.trim()) {
      addTags(input);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const visibleTags = value.slice(0, maxVisibleTags);
  const remaining = value.length - maxVisibleTags;

  return (
    <>
      {/* Input */}
      <div className={`border p-2 rounded flex flex-wrap gap-1 ${className}`}>
        {visibleTags.map((tag, index) => (
          <div key={index} className="bg-gray-200 px-2 py-1 rounded flex items-center">
            <span className="mr-1">{tag}</span>
            <button
              type="button"
              className="text-red-500 ml-1"
              onClick={() => removeTag(index)}
            >
              &times;
            </button>
          </div>
        ))}

        {remaining > 0 && (
          <button
            onClick={() => setShowAllTags(true)}
            className="bg-gray-300 text-xs px-2 py-1 rounded text-gray-600 hover:bg-gray-400"
          >
            +{remaining} more
          </button>
        )}

        {(!maxTags || value.length < maxTags) && (
          <input
            type="text"
            className="flex-1 min-w-[100px] focus:outline-none"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            placeholder={placeholder}
          />
        )}
      </div>

      {/* Modal for all tags */}
      {showAllTags && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">All Tags</h2>
            <div className="flex flex-wrap gap-2 mb-4 max-h-60 overflow-y-auto">
              {value.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-100 px-2 py-1 rounded flex items-center"
                >
                  <span className="mr-1">{tag}</span>
                  <button
                    type="button"
                    className="text-red-500 ml-1"
                    onClick={() => removeTag(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowAllTags(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TagInput;

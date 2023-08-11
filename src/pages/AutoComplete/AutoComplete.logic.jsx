import { Input } from 'antd'

export const handleSuggestion = () => {
  return ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '1rem',
          width: '100%',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <label
          htmlFor='search'
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          Find Places :
        </label>
        <Input
          id='search'
          {...getInputProps({
            placeholder: 'Search Places ...',
            style: {
              backgroundColor: '#ffffff',
              border: 'transparent',
              flexGrow: '1',
              padding: '5px',
              margin: '0 1rem',
              textAlign: 'center',
              verticalAlign: 'middle',
              fontSize: 'medium',
              color: '#000000',
            },
          })}
        />
      </div>
      <div
        style={{
          width: '100%',
        }}
      >
        {loading ? <div>Loading...</div> : handleClick(suggestions, getSuggestionItemProps)}
      </div>
    </>
  )
}

export const handleClick = (suggestions, getSuggestionItemProps) => {
  return suggestions.map((suggestion) => {
    const style = suggestion.active
      ? { backgroundColor: '#B6D1E6', cursor: 'pointer' }
      : { backgroundColor: '#ffffff', cursor: 'none' }
    return (
      <div
        key={suggestion.index}
        {...getSuggestionItemProps(suggestion, {
          style,
        })}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '0.5rem',
          }}
        >
          <div>{`${suggestion.index + 1}. `}</div>
          <div
            style={{
              textAlign: 'left',
              marginBottom: '0.5rem',
            }}
          >
            {suggestion.description}
          </div>
        </div>
      </div>
    )
  })
}

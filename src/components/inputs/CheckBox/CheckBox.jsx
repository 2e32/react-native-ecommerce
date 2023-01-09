import { Container, Box, Label } from './components';

export default function CheckBox(props) {
  const {
    checked = false,
    label,
    disabled = false,
    boxStyle,
    labelStyle,
    iconProps,
    onChange,
    ...rest
  } = props;

  const handlePress = () => {
    if (typeof onChange === 'function') onChange(!checked);
  };

  return (
    <Container disabled={disabled} onPress={handlePress} {...rest}>
      <Box checked={checked} disabled={disabled} style={boxStyle} iconProps={iconProps} />
      {label && (
        <Label disabled={disabled} style={labelStyle}>
          {label}
        </Label>
      )}
    </Container>
  );
}

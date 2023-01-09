import { Container, Box, Label } from './components';

export default function CheckBox(props) {
  const { checked = false, label, disabled = false, onChange } = props;

  const handlePress = () => {
    if (typeof onChange === 'function') onChange(!checked);
  };

  return (
    <Container disabled={disabled} onPress={handlePress}>
      <Box checked={checked} disabled={disabled} />
      {label && <Label disabled={disabled}>{label}</Label>}
    </Container>
  );
}

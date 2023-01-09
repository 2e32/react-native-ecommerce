import { Container, Box, Label } from './components';

export default function CheckBox(props) {
  const { checked = false, label, onChange } = props;

  const handlePress = () => {
    if (typeof onChange === 'function') onChange(!checked);
  };

  return (
    <Container onPress={handlePress}>
      <Box checked={checked} />
      {label && <Label>{label}</Label>}
    </Container>
  );
}

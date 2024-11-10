import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web Developer',
        1000,
        'Networking',
        1000,
        'Graphic Designer',
        1000,
        'animation',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color: '#73b9b9' }}
      repeat={Infinity}
    />
  );
};
export default TypingEffect;
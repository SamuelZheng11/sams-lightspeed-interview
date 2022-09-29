import styled from 'styled-components';

// See the component documentation https://ls-jacob-lawrence.github.io/fe-interview-ds/
import { Button, Text } from '@ls-jacob-lawrence/fe-interview-ds';

const Container = styled.section`
    font-family: sans-serif;
`;

export default function App() {
    return (
        <Container>
            <Text size="large">Hello Lightspeed</Text>
            <Button onClick={() => alert('You clicked the button')}>
                Example Button
            </Button>
        </Container>
    );
}

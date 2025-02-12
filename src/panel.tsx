import { Button, Card, CardContent } from "@react-three/uikit-default";
import { Container, DefaultProperties, Image, Text } from "@react-three/uikit";

export function PanelUI() {
  return (
    <Container backgroundColor="rgb(41,41,41)" width={1000} height="50%"
      flexDirection="column" justifyContent="space-between" borderTopRadius={8}>
      <Container flexDirection="row" justifyContent="space-between" padding={8}>
        <Text color="rgba(255, 255, 255, 0.7)">...</Text>
        <Text color="rgba(255, 255, 255, 0.7)">Browser</Text>
        <Text color="rgba(255, 255, 255, 0.7)">_ X</Text>
      </Container>
      <Container flexDirection="row">
        <Container flexDirection="row" backgroundColor="rgba(100, 100, 100)" borderTopRadius={8} padding={8}>
          <Image src="assets/globe.png"/>
          <Text color="rgba(255, 255, 255, 0.7)" padding={8}>My cool site</Text>
          <Image src="assets/cross.webp" hover={{ transformTranslateZ: 10 }}/>
        </Container>
        <Image src="assets/plus.webp" hover={{ transformTranslateZ: 10 }}/>
      </Container>
      <Container backgroundColor="rgb(255,255,255)" padding={8} height={500} flexDirection="column">
        <Container flexDirection="row" alignItems="flex-start">
          <Text>The quick brown fox jumped over the--</Text>
          <Text color="rgb(0,0,255)" hover={{ transformTranslateZ: 10 }}>Pop 10 hyperlink</Text>
          <Text>.</Text>
        </Container>
        <Container flexDirection="row" alignItems="flex-start">
          <Text>The quick brown fox jumped over the--</Text>
          <Text color="rgb(0,0,255)" hover={{ transformTranslateZ: 30 }}>Pop 30 hyperlink</Text>
          <Text>.</Text>
        </Container>
        <Container flexDirection="row" alignItems="flex-start">
          <Text>The quick brown fox jumped over the--</Text>
          <Text color="rgb(0,0,255)" hover={{ transformTranslateZ: 30 }}>Pop 50 hyperlink</Text>
          <Text>.</Text>
        </Container>
        <Container padding={12} flexDirection="row" height="50%" gap={8}>
          <Image src="assets/billy_openai.webp" hover={{ transformTranslateZ: 10 }}/>
          <Image src="assets/happy_openai.webp" hover={{ transformTranslateZ: 30 }}/>
          <Image src="assets/nicky_openai.webp" hover={{ transformTranslateZ: 50 }}/>
        </Container>
        <Container gap={8} paddingY={10}>
          <Button backgroundColor="red"><Text hover={{ transformTranslateZ: 10 }}>Pop 10</Text></Button>
          <Button backgroundColor="red"><Text hover={{ transformTranslateZ: 20 }}>Pop 20</Text></Button>
          <Button backgroundColor="red"><Text hover={{ transformTranslateZ: 30 }}>Pop 30</Text></Button>
          <Button backgroundColor="red"><Text hover={{ transformTranslateZ: 40 }}>Pop 40</Text></Button>
          <Button backgroundColor="red"><Text hover={{ transformTranslateZ: 50 }}>Pop 50</Text></Button>
        </Container>
        <Container gap={8}>
          <Button backgroundColor="blue" hover={{ transformTranslateZ: 10 }}><Text>Pop 10</Text></Button>
          <Button backgroundColor="blue" hover={{ transformTranslateZ: 20 }}><Text>Pop 20</Text></Button>
          <Button backgroundColor="blue" hover={{ transformTranslateZ: 30 }}><Text>Pop 30</Text></Button>
          <Button backgroundColor="blue" hover={{ transformTranslateZ: 40 }}><Text>Pop 40</Text></Button>
          <Button backgroundColor="blue" hover={{ transformTranslateZ: 50 }}><Text>Pop 50</Text></Button>
        </Container>
      </Container>
    </Container>
  );
}

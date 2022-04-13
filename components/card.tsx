import {CheckCircledIcon, CheckIcon} from "@radix-ui/react-icons";
import styled from "styled-components";

interface PricingProps {
    product: string;
    min: number;
    max: number;
    features: string[];
}

const StyledIcon = styled(CheckIcon)`
    width: 20px;
    height: 20px;
    color: var(--color-yisy-green-text);
    font-weight: bold;
`;

const Features = styled.div`
    margin: 48px auto 8px auto;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
`
const Heading = styled.h4`
    font-size: 1.5rem;  
    margin: 16px 0;
    height: 100px;
    vertical-align: center;
`;
const Price = styled.p`
    color: var(--color-yisy-green-text);
    font-weight: bold;
`;
const FeatureItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
`;

const Card = styled.div`
  padding: 32px 4px;
  width: 300px;
  border: 1px solid var(--color-gray-400);
  border-radius: 8px;
  text-align: center;
`;

export function PricingCard({product, min, max, features}: PricingProps){
    return (
        <Card>
            <Heading>{product}</Heading>
            <Price>£{min} - £{max}</Price>
            <Features>
                {features.map(f => (
                    <FeatureItem key="product" >
                        <StyledIcon />
                        <span>{f}</span>
                    </FeatureItem>
                ))}
            </Features>
        </Card>
    )
}
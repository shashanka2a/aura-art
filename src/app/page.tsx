import { HeroNew } from "../components/HeroNew";
import { FeaturesBento } from "../components/FeaturesBento";
import { SocialProofSimple } from "../components/SocialProofSimple";
import { FinalCTA } from "../components/FinalCTA";
import { FooterMinimal } from "../components/FooterMinimal";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroNew />
      <FeaturesBento />
      <SocialProofSimple />
      <FinalCTA />
      <FooterMinimal />
    </div>
  );
}
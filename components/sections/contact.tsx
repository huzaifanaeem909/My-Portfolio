import { Container } from "../container";
import { MagicButton, MotionUp } from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Heading } from "../";
import { SocialLink } from "@/lib/types";
import { sortByPriority } from "@/lib/utils";
import { FaMedium, FaXTwitter, FaLocationArrow } from "react-icons/fa6";

interface Props {
  socialLinks: SocialLink[];
}

const getSocialIcons = (title: string) => {
  switch (title) {
    case "GitHub":
      return <FaGithub size={30} />;
    case "LinkedIn":
      return <FaLinkedinIn size={30} />;
    case "Instagram":
      return <FaInstagram size={30} />;
    case "X":
      return <FaXTwitter size={30} />;
    default:
      return <FaMedium size={30} />;
  }
};

const getIconColors = (title: string) => {
  switch (title) {
    case "GitHub":
      return "text-gray-200 hover:text-gray-500";
    case "LinkedIn":
      return "text-blue-500 hover:text-blue-700";
    case "Instagram":
      return "text-pink-500 hover:text-pink-700";
    default:
      return "text-white-500 hover:text-gray-500";
  }
};

export function Contact({ socialLinks }: Props) {
  return (
    <SmallGridBackground className="py-10" id="contact">
      <Container>
        <MotionUp delay={0.1}>
          <Heading text="Ready to take your digital presence to the next level?" />

          <div>
            <div className="flex flex-col items-center">
              <p className="text-white-200 md:mb-20 my-10 text-center">
                Reach out to me today and let&apos;s discuss how I can help you
                achieve your goals.
              </p>
              <a href="mailto:huzaifanaeem909@gmail.com">
                <MagicButton
                  title="Let's get in touch"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>

          </div>
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-medium py-5">
                Copyright © 2024 Muhammad Huzaifa
            </p>

            <div className="flex items-center md:gap-3 gap-6">
                {sortByPriority(socialLinks).map((item) => (
                <Link
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    className={`w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ${getIconColors(
                    item.title
                    )}`}
                >
                    {getSocialIcons(item.title)}
                </Link>
                ))}
            </div>
          </div>
        </MotionUp>
      </Container>
    </SmallGridBackground>
  );
}

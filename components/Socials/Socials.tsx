import Link from "next/link";
import { socials } from "@/utils/constants";
import SocialType from "@/types/SocialType";
import styles from "./Socials.module.scss";

const Socials = () => {
	return (
		<ul className={styles.socials}>
			{socials.map((social: SocialType) => (
				<li key={social.id}>
					<Link href={social.address} target={"_blank"}>
						{social.icon}
					</Link>
				</li>
			))}
		</ul>
	);
};
export default Socials;
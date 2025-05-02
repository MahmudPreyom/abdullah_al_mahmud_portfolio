import Link from "next/link";
import { Github, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="shadow-2xl pb-32 pt-20 text-center bg-muted text-muted-foreground">
      <Link
        href="/"
        className="text-2xl font-semibold mb-6 inline-block text-foreground"
      >
        Abdullah Al Mahmud
      </Link>

      <ul className="flex flex-wrap justify-center gap-6 mb-8">
        <li>
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
        </li>
        {/* <li>
          <Link href="/projects" className="hover:text-primary transition">
            Project
          </Link>
        </li> */}
        <li>
          <Link href="/experience" className="hover:text-primary transition">
            Experience
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-6">
        <Link
          href="https://web.facebook.com/mahmud.preyom"
          className="bg-background p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition"
        >
          <Facebook className="w-6 h-6 text-blue-600" />
        </Link>
        <Link
          href="https://github.com/MahmudPreyom"
          className="bg-background p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition"
        >
          <Github className="w-6 h-6 text-foreground" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCjMxx9QlxCZWbHELuvZxU5A"
          className="bg-background p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition"
        >
          <Youtube className="w-6 h-6 text-red-600" />
        </Link>
      </div>

      <div className="text-sm">
        <h5>
          &copy; {new Date().getFullYear()} Abdullah Al Mahmud. All Rights
          Reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;

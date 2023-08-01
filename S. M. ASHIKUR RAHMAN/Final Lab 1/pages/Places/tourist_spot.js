import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <div>
      <div>
        <div>
          <Image
            src="/bangladesh.jpg"
            alt="Photo"
            height={500}
            width={1100}
          />
        </div>
        <div>
          
          <Link href="/home">Home</Link>
        </div>
      </div>
    </div>
  );
}

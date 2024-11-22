import Image from "next/image";

export const Navbar = () => {
    return (
        <>
            <div className="text-white w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black px-5">
                <div className="container py-10 flex mx-auto gap-10">
                    <Image
                        src="/profile.png"
                        width={200}
                        height={200}
                        alt="Profile"
                        className="rounded-full"
                    />
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ad magni accusamus natus! Iste laboriosam voluptas, modi nesciunt illum veritatis non, commodi asperiores ad aut sunt possimus autem! Inventore, explicabo.</div>
                </div>
                
            </div>
        </>
    );
}
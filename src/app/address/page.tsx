import Link from "next/link";

export default function Address() {
    const cepList = [
        '29176-310',
        '64010-030',
        '40484-440',
        '74473-030',
        '49052-230',
    ];
    
    return (
      <div>
        {cepList.map((cep) => (
            <Link className="block w-fit" key={cep} href={`/address/${cep}`}>
                <p className="my-2 px-2"> {cep} </p>
            </Link>
        ))}
      </div>
    );
  }
  
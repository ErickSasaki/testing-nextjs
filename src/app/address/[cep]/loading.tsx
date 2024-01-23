interface AddressByCepRouteParams {
    cep: string;
}

interface AddressByCepProps {
    params: AddressByCepRouteParams;
}

export default function Loading() {
    return (
        <p>
            loading...
        </p>
    );
}

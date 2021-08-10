import Map from '@/components/parts/Map';

export default function DetailsMap({ data }) {
    return (
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
            <Map maps={data} />
        </section>
    )
}

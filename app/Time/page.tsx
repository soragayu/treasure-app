import Image from "next/image";

export default function Time() {
    return (
        <div className="w-full p-8 flex flex-col items-center gap-8">
            <p >SKY<span className="text-[#16b9e7]">.トリップ</span></p>
            <div className="w-full max-w-100">
                <Image src="/rondon.jpg" alt="rondon" width={1206} height={896} />
                <p className="text-lg font-bold">ランドマークに注目！世界の有名な時計スポット</p>
            </div>
            <div className="w-full max-w-100"><Image src="/torio.jpg" alt="torio" width={1206} height={180} /></div>
            <div className="w-full max-w-100 bg-[#FAFAF6] p-4 flex flex-col gap-2">
                <div className="w-full flex items-center">
                    <Image src="/logo.png" alt="logo" width={4096} height={4096} className="w-1/10" />
                    <p className="font-semibold">このまとめ記事の目次</p>
                </div>
                <div className="text-sm text-[#757575] tracking-widest">
                    <p>- ビッグ・ベン</p>
                    <p>- 星順メトロ</p>
                    <p>- 硝子の逆光</p>
                    <p>- 色鐘トーレ</p>
                    <p>- クレムリンタワー</p>
                    <p>- 帽塔ベルニ</p>
                    <p>- 永遠ヲ刻ム</p>
                </div>
            </div>
            <div className="w-full max-w-100 flex flex-col gap-2">
                <p className="font-semibold px-4 border-l-4 border-[#7F1184]">ビッグ・ベン</p>
                <Image src="/rondon.jpg" alt="rondon" width={1206} height={896} />
                <p className="text-sm px-4 text-[#757575]">イギリスのロンドンにある時計塔。毎日正午にチャイムのような鐘の音を鳴らす</p>
            </div>
            <div className="w-full max-w-100 flex flex-col gap-2">
                <p className="font-semibold px-4 border-l-4 border-[#F067A6]">星順メトロ</p>
                <Image src="/cheko.jpg" alt="cheko" width={1206} height={895} />
                <p className="text-sm px-4 text-[#757575]">チェコのプラハにある天文時計。文字盤が特徴的である歴史的な天文時計</p>
            </div>
            <div className="w-full max-w-100 flex flex-col gap-2">
                <p className="font-semibold px-4 border-l-4 border-[#65BBE9]">硝子ノ逆光</p>
                <Image src="/suis.jpg" alt="suis" width={1206} height={789} />
                <p className="text-sm px-4 text-[#757575]">スイスの首都ベルンにある時計台。時刻の他に月、日、曜日、星座、月の位置も表す立派なもの</p>
            </div>
            <div className="w-full max-w-100 flex flex-col gap-2">
                <p className="font-semibold px-4 border-l-4 border-[#FF0000]">色鐘トーレ</p>
                <Image src="/furansu.jpg" alt="furansu" width={1206} height={796} />
                <p className="text-sm px-4 text-[#757575]">フランスのルーアンにある大時計。ルーアンで最も賑やかな通りにあるこの時計は、この街の目印ともなっている</p>
            </div>
            <div className="w-full max-w-100 flex flex-col gap-2">
                <p className="font-semibold px-4 border-l-4 border-[#F4E511]">クレムリンタワー</p>
                <Image src="/rosia.jpg" alt="rosia" width={1206} height={789} />
                <p className="text-sm px-4 text-[#757575]">ロシアはモスクワにある時計塔。黒くてシックなデザインが特徴的である</p>
            </div>
            <div className="w-full max-w-100 flex flex-col gap-2">
                <p className="font-semibold px-4 border-l-4 border-[#F15A22]">帽塔ベルニ</p>
                <Image src="/hyogo.jpg" alt="hyogo" width={1206} height={796} />
                <p className="text-sm px-4 text-[#757575]">大阪府柏原市にある時計台。警察署で管理されており、品番が259705であることが知られている</p>
            </div>
            <div className="w-full max-w-100 flex flex-col gap-2">
                <p className="font-semibold px-4 border-l-4 border-[#00B16B]">永遠ヲ刻ム</p>
                <Image src="/kanada.jpg" alt="kanada" width={1206} height={863} />
                <p className="text-sm px-4 text-[#757575]">カナダのバンクーバーにある蒸気時計。15分おきに蒸気で笛が鳴るユニークな構造</p>
            </div>
            <div className="w-full max-w-100 flex flex-col gap-2">
                <p className="font-semibold px-4 border-l-4">時計は街のランドマークだ!</p>
                <Image src="/rand.jpg" alt="rand" width={1206} height={799} />
                <p className="text-sm px-4 text-[#757575]">いかがでしたか。長い歴史の中で街を守り続けてきた時計台は、どこの場所であっても人々から愛される、街を象徴するランドマークのような存在です
                    <br />ところで、『このまとめ記事の目次』の左にあるロゴ、矢印が書いており少し独特な見た目をしていますね。もしかしたらこのロゴに何か意味が隠されているのかも知れませんね...
                </p>
            </div>
        </div>
    )
}
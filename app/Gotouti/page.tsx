import Image from "next/image";

import { mincho } from "@/app/ui/fonts";

export default function Gotouti() {
    return (
        <div className="w-full h-full bg-[#f7f7f7] py-8 flex flex-col items-center gap-8">
            <div className="w-full max-w-100 flex items-center justify-center">
                <Image src="/rogo.png" alt="rogo" width={4096} height={4096} className="w-1/10" />
                <p className="text-base font-bold">方言ジャパン</p>
            </div>
            <div className="w-full max-w-100 relative">
                <Image src="/japan.jpg" alt="japan" width={2108} height={2016} />
                <div className={`w-full absolute p-4 text-white ${mincho.className} inset-0 items-center justify-center flex flex-col gap-4`}>
                    <p className="text-2xl">23時頃に出合うワカセひろば</p>
                    <p className="text-sm">日本には面白い方言がたくさんあるということをご存知ですか？</p>
                </div>
            </div>
            <div className="w-full max-w-100"><Image src="/art.png" alt="art" width="1206" height="1062" className="w-full" /></div>
            <div className="w-full max-w-100 flex flex-col items-center">
                <p className="text-[#5e5e5e] text-sm">RANKING</p>
                <p className="text-base border-b font-bold border-[#fe5752]">みんなが気になる方言ランキング</p>
            </div>
            <div className="w-4/5 max-w-100 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col gap-4">
                <Image src="/okinawa.jpg" alt="okinawa" width={1095} height={727} />
                <p className="text-sm font-semibold">第一位</p>
                <p className="text-lg font-bold">てぃーち(沖縄の方言)</p>
                <p className="text-base">『数字の1』を意味する言葉。本土とは全然ちがって面白いですね!</p>
            </div>
            <div className="w-4/5 max-w-100 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col gap-4">
                <Image src="/akita.jpg" alt="okinawa" width={500} height={375} />
                <p className="text-sm font-semibold">第二位</p>
                <p className="text-lg font-bold">名っこ(秋田の方言)</p>
                <p className="text-base">『タイトル』を意味する言葉。根っこみたいでかわいいね！</p>
            </div>
            <div className="w-4/5 max-w-100 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col gap-4">
                <Image src="/hirosima.jpg" alt="okinawa" width={640} height={426} />
                <p className="text-sm font-semibold">第三位</p>
                <p className="text-lg font-bold">じゃけ(広島の方言)</p>
                <p className="text-base">身近にも使ってる人よくいるよね!どういう意味なんだろうね</p>
            </div>
            <div className="w-4/5 max-w-100 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col gap-4">
                <Image src="/yonaguni.jpg" alt="okinawa" width={640} height={410} />
                <p className="text-sm font-semibold">第四位</p>
                <p className="text-lg font-bold">どぅむん(与那国の方言)</p>
                <p className="text-base">与那国の言葉!?全然聞いた事ないね。意味は『読め』らしいよ</p>
            </div>
            <div className="w-full max-w-100 flex flex-col items-center">
                <p className="text-[#5e5e5e] text-sm">SUMMARY</p>
                <p className="text-base border-b font-bold border-[#fe5752]">まとめ</p>
            </div>
            <div className="w-4/5 max-w-100 shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4 flex flex-col items-center gap-4">
                <p className="text-base">方言には色々な種類があって面白いですね。最後にこれまで出てきた方言を使って一文書いてみました！</p>
                <p className="text-lg font-bold">名っこをてぃーち飛ばしてどぅむん</p>
            </div>
        </div>
    );
}
import Card from "@/components/ui/card";
import cardStyles from "@/config/card-styles.json";
import siteContent from "@/config/site-content.json";

function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        return 'Good Morning'
    } else if (hour >= 12 && hour < 18) {
        return 'Good Afternoon'
    } else if (hour >= 18 && hour < 22) {
        return 'Good Evening'
    } else {
        return 'Good Night'
    }
}

export default function HiCard() {
	const greeting = getGreeting()
	const username = siteContent.meta.username || 'Elana'
	const styles = cardStyles.hi

	return (
		<div className="flex justify-center items-center min-h-screen">
			<Card
				width={styles.width}
				height={styles.height}
				x={0}
				y={0}
				className="relative text-center"
			>
				<img
					src="/images/avatar.png"
					alt="Avatar"
					className="mx-auto rounded-full"
					style={{
						width: 120,
						height: 120,
						boxShadow: '0 16px 32px -5px #E2D9CE'
					}}
				/>

				<h1 className="font-averia mt-3 text-2xl">
					{greeting}
					<br />
					I&apos;m{' '}
					<span className="text-linear text-[32px]">
						{username}
					</span>
					, Nice to
					<br />
					meet you!
				</h1>
			</Card>
		</div>
	)
}
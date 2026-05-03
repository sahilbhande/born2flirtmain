export default async function handler(req, res) {
  // ✅ CORS FIX (important for localhost)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      "https://discord.com/api/guilds/1128573787051401276/widget.json"
    );

    if (!response.ok) {
      throw new Error("Discord API failed");
    }

    const data = await response.json();

    // ✅ Members (clean + safe)
    const members = (data.members || []).slice(0, 50).map((m) => ({
      username: m.username,
      avatar: m.avatar_url,
      status: m.status,
    }));

    // ✅ Build channel map (FASTER than find())
    const channelMap = {};
    (data.channels || []).forEach((c) => {
      channelMap[c.id] = c.name;
    });

    // ✅ Group voice users
    const voiceMap = {};
    (data.members || []).forEach((m) => {
      if (m.channel_id) {
        if (!voiceMap[m.channel_id]) {
          voiceMap[m.channel_id] = [];
        }
        voiceMap[m.channel_id].push({
          avatar: m.avatar_url,
        });
      }
    });

    // ✅ Build voice channels (optimized)
    const voiceChannels = Object.keys(voiceMap)
      .map((id) => ({
        name: channelMap[id] || "Active Voice",
        count: voiceMap[id].length,
        users: voiceMap[id],
      }))
      .filter((vc) => vc.count > 0)
      .sort((a, b) => b.count - a.count);

    // ✅ Response
    return res.status(200).json({
      online: data.presence_count || 0,
      members,
      voiceChannels,
    });

  } catch (err) {
    console.error("API ERROR:", err);

    return res.status(500).json({
      online: 0,
      members: [],
      voiceChannels: [],
      error: "Failed to fetch Discord data",
    });
  }
}
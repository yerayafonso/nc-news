function formatDate(created_at) {
  const date = new Date(created_at);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const result = `Posted: ${formattedDate} at ${formattedTime}`;

  return result;
}

export default formatDate;

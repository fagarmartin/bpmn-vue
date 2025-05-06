export const fetchXML = async (xmlPath :string) => {
	try {
		const response = await fetch(xmlPath)

		if (!response.ok) {
			throw new Error(`Failed to fetch diagram XML. Status: ${response.status}`)
		}

		const xmlContent = await response.text()
		return xmlContent
	} catch (error) {
		console.error('Error fetching diagram XML:', error)
		throw error // Re-throw the error for the calling code to handle
	}
}
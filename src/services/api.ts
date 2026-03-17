const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.spmcrc.org/api';

async function fetcher(endpoint: string, options: RequestInit = {}): Promise<any> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API error: ${response.status}`);
  }

  return response.json();
}

export const getProfessors = async (page = 1, limit = 10) => {
  return fetcher(`/professors?page=${page}&limit=${limit}`);
};

export const getCourses = async (page = 1, limit = 10) => {
  return fetcher(`/courses?page=${page}&limit=${limit}`);
};

export const getCourseById = async (id: string) => {
  return fetcher(`/courses/${id}`);
};

export const getGallery = async (page = 1, limit = 10) => {
  return fetcher(`/gallery?page=${page}&limit=${limit}`);
};

export const getMetadata = async () => {
  try {
    return await fetcher('/metadata');
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return { data: { metadata: [] } }; // Fallback
  }
};

export const submitContactForm = async (data: any) => {
  return fetcher(`/contact-submissions`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
